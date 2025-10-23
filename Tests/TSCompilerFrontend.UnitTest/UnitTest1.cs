using System.Net.Security;
using TSCompilerFrontend.TsTypes;

namespace TSCompilerFrontend.UnitTest;

public class Tests
{
  private IAst _ast;

  [SetUp]
  public void Setup()
  {
    var path = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, 
      "Ts/freelancer-management-client/src", "app/app.component.ts");
           _ast = new Ast(File.ReadAllText(path));
  }

  [Test]
  public void ShouldCreateValidAst()
  {
    var dec = _ast.GetDescendants();
    Assert.That(dec.Count(), Is.GreaterThan(0));
  }
}