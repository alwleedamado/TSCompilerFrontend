using System.Collections.Generic;
using TSCompilerFrontend.TsTypes;

namespace TSCompilerFrontend;

public interface IAst
{
  ScriptTarget ScriptTarget { get; set; }
  string? SourceStr { get; set; }
  Node? RootNode { get; set; }
  string? GetTreeString(bool withPos);
  IEnumerable<Node>? GetDescendants();
  void MakeAst(string? source, string fileName = "fileName.ts", bool setChildren = true);
}

public class Ast : IAst
{
  public ScriptTarget ScriptTarget { get; set; } = ScriptTarget.Latest; //ES6
  public string? SourceStr { get; set; }
  public Node? RootNode { get; set; }
  
  private bool _childrenMade;

  public Ast(string? source = null, string fileName = "fileName.ts",
    bool setChildren = true)
  {
    if (source != null) MakeAst(source, fileName, setChildren);
  }
  
  public void MakeAst(string? source, string fileName = "fileName.ts", bool setChildren = true)
  {
    SourceStr = source;
    var parser = new Parser.Parser();
    var sourceFile =
      parser.ParseSourceFile(fileName, source, ScriptTarget, null, false, ScriptKind.Ts);
    RootNode = sourceFile;
    RootNode.Ast = this;
    if (!setChildren) return;
    _childrenMade = true;
    RootNode.MakeChildren(this);
  }

  public IEnumerable<Node>? GetDescendants()
  {
    if (!_childrenMade && RootNode != null)
    {
      RootNode.MakeChildren(this);
      _childrenMade = true;
    }

    return RootNode?.GetDescendants();
  }

  public string? GetTreeString(bool withPos = true)
  {
    return RootNode?.GetTreeString(withPos);
  }

  public IEnumerable<Node>? OfKind(SyntaxKind kind)
  {
    return RootNode?.OfKind(kind);
  }
}