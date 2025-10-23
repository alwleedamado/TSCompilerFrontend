using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using TSCompilerFrontend.TsTypes;

namespace TSCompilerFrontend.Change;

public class ChangeAst(ICollection<NodeChangeItem>? changeItems = null)
{
  private readonly ICollection<NodeChangeItem> _nodeChangeItems = changeItems ?? [];

  private static string Change(string source, IEnumerable<NodeChangeItem> changeItems)
  {
    var changes = changeItems.OrderBy(v => v.Node.Pos).ThenBy(v2 => v2.ChangeType);
    var sb = new StringBuilder();
    var pos = 0;
    foreach (var ch in changes)
    {
      if (ch.Node.Pos == null) throw new NullReferenceException("Node.Pos");
      switch (ch.ChangeType)
      {
        case NodeChangeType.InsertBefore:
          if (ch.Node.Pos > pos) sb.Append(source.Substring(pos, (int)ch.Node.Pos - pos));
          sb.Append(ch.NewValue);
          pos = (int)ch.Node.Pos;
          break;
        case NodeChangeType.Change:
          if (ch.Node.Pos > pos) sb.Append(source.Substring(pos, (int)ch.Node.Pos - pos));
          sb.Append(ch.NewValue);
          if (ch.Node.End != null) pos = (int)ch.Node.End;
          else throw new NullReferenceException("Node.End");
          break;
        case NodeChangeType.Delete:
          if (ch.Node.Pos > pos) sb.Append(source.Substring(pos, (int)ch.Node.Pos - pos));
          if (ch.Node.End != null) pos = (int)ch.Node.End + 1;
          break;
        case NodeChangeType.InsertAfter:
          if (ch.Node.End > pos) sb.Append(source.Substring(pos, (int)ch.Node.End - pos));
          sb.Append(ch.NewValue);
          if (ch.Node.End != null) pos = (int)ch.Node.End;
          break;
        default:
          throw new ArgumentOutOfRangeException();
      }
    }

    if (pos < source.Length) sb.Append(source.Substring(pos));
   return sb.ToString();
  }

  public string GetChangedSource(string baseSource)
  {
    return Change(baseSource, _nodeChangeItems);
  }

  public void ChangeNode(INode node, string newValue)
  {
    if (_nodeChangeItems.Any(v => v.Node == node &&
                                  (v.ChangeType == NodeChangeType.Change ||
                                   v.ChangeType == NodeChangeType.Delete)))
      throw new Exception("ChangeItems already have this node. Delete first");
    if (_nodeChangeItems.Any(v => v.Node.Pos < node.Pos && v.Node.End > node.Pos))
      throw new Exception("ChangeItems already have node that contains this node. Delete first");

    if (newValue != node.GetTextWithComments())
    {
      var nodeCh = new NodeChangeItem(node, NodeChangeType.Change, newValue);
      _nodeChangeItems.Add(nodeCh);
    }
    else
    {
      throw new Exception("Same value");
    }
  }

  public void InsertBefore(INode node, string newValue)
  {
      //if (_nodeChangeItems.Any(v => v.Node.Pos < node.Pos && v.Node.End > node.Pos))
      //    throw new Exception("ChangeItems already have node that contains this node. Delete first");

      var nodeCh = new NodeChangeItem(node, NodeChangeType.InsertBefore,
        newValue);
      _nodeChangeItems.Add(nodeCh);
  }

  public void InsertAfter(INode node, string newValue)
  {
      //if (_nodeChangeItems.Any(v => v.Node.Pos < node.Pos && v.Node.End > node.Pos))
      //    throw new Exception("ChangeItems already have node that contains this node. Delete first");

      var nodeCh = new NodeChangeItem(node, NodeChangeType.InsertAfter, newValue);
      _nodeChangeItems.Add(nodeCh);
  }

  public void Delete(INode node)
  {

      if (_nodeChangeItems.Any(v => v.Node.Pos < node.Pos && v.Node.End > node.Pos))
        throw new Exception(
          "ChangeItems already have node that contains this node. Delete first");

      var nodeCh = new NodeChangeItem(node, NodeChangeType.Delete);
      _nodeChangeItems.Add(nodeCh);
    }
}