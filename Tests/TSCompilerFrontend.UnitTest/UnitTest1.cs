using System.Net.Security;
using TSCompilerFrontend.TsTypes;

namespace TSCompilerFrontend.UnitTest;

public class Tests
{
  private IAst _ast;

  private const string Code =
    "import { Component } from '@angular/core';\nimport { RouterOutlet } from '@angular/router';\n\n@Component({\n  selector: 'app-root',\n  standalone: true,\n  imports: [RouterOutlet],\n  templateUrl: './app.component.html',\n  styleUrl: './app.component.scss'\n})\nexport class AppComponent {\n  title = 'angular-template';\n}\n";
  [SetUp]
  public void Setup()
  {
    _ast = new Ast(Code);
  }

  [Test]
  public void ShouldCreateValidAst()
  {
    var dec = _ast.GetDescendants();
    Assert.That(dec.Count(), Is.GreaterThan(0));
  }
}