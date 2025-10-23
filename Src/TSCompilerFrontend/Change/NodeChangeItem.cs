using TSCompilerFrontend.TsTypes;

namespace TSCompilerFrontend.Change;

public class NodeChangeItem(INode node, NodeChangeType changeType, string? newValue = null)
{
  public NodeChangeType ChangeType { get; init; } = changeType;
  public INode Node { get; init; } = node;
  public string? NewValue { get; init; } = newValue;

  private string NewValueSmall => NewValue.Length > 20
    ? NewValue.Substring(0, 18) + $"..({NewValue.Length})"
    : NewValue;

  public override string ToString()
  {
    return ChangeType == NodeChangeType.Delete ?
      $"{ChangeType} {Node}." :
      $"{ChangeType} {Node}. NewValue = \"{NewValueSmall}\"";
  }
}