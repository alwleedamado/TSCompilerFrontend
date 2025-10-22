using System.Net.Security;

namespace TSCompilerFrontend.UnitTest;

public class Tests
{
  private ITypeScriptAST _ast;
  [SetUp]
  public void Setup()
  {
    _ast = new TypeScriptAST(File.ReadAllText(AppDomain.CurrentDomain.BaseDirectory + "\\app.component.ts"));
  }

  [Test]
  public void ShouldCreateValidAst()
  {
    var dec = _ast.GetDescendants();
    Assert.That(dec.Count(), Is.GreaterThan(0));
  }
}