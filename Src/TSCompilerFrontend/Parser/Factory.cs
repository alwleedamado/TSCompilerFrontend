using TSCompilerFrontend.TsTypes;

namespace TSCompilerFrontend.Parser;

public static class Factory
{
  public static INode? SkipPartiallyEmittedExpressions(INode? node)
  {
    while (node.Kind == SyntaxKind.PartiallyEmittedExpression)
      node = ((PartiallyEmittedExpression)node).Expression;


    return node;
  }
}