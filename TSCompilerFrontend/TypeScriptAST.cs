using System.Collections.Generic;
using TSCompilerFrontend.TsTypes;

namespace TSCompilerFrontend
{
    public interface ITypeScriptAST
    {
        ScriptTarget ScriptTarget { get; set; }
        string SourceStr { get; set; }
        Node RootNode { get; set; }
        string GetTreeString(bool withPos);
        IEnumerable<Node> GetDescendants();
        void MakeAST(string source, string fileName = "fileName.ts", bool setChildren = true);
    }

    public class TypeScriptAST : ITypeScriptAST
    {
        private bool childrenMade;

        public TypeScriptAST(string? source = null, string fileName = "fileName.ts", bool setChildren = true)
        {
            if (source != null) MakeAST(source, fileName, setChildren);
        }

        public ScriptTarget ScriptTarget { get; set; } = ScriptTarget.Latest; //ES6
        public string SourceStr { get; set; }
        public Node RootNode { get; set; }

        public void MakeAST(string source, string fileName = "fileName.ts", bool setChildren = true)
        {
            SourceStr = source;
            var parser = new Parser.Parser();
            var sourceFile = parser.ParseSourceFile(fileName, source, ScriptTarget, null, false, ScriptKind.Ts);
            RootNode = sourceFile;
            RootNode.Ast = this;
            if (setChildren)
            {
                childrenMade = true;
                RootNode.MakeChildren(this);
            }
            //RootNode.GetDescendants().ToList().ForEach((n) => n.AST = this);
        }

        public IEnumerable<Node> GetDescendants()
        {
            if (!childrenMade && RootNode != null)
            {
                RootNode.MakeChildren(this);
                childrenMade = true;
            }

            return RootNode?.GetDescendants();
        }

        public string GetTreeString(bool withPos = true)
        {
            return RootNode?.GetTreeString(withPos);
        }

        public IEnumerable<Node> OfKind(SyntaxKind kind)
        {
            return RootNode?.OfKind(kind);
        }
    }
}