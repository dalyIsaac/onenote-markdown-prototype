import React from "react";
import { HtmlEditorComponent } from "./htmlEditor/htmlEditor";
import { MarkdownEditorComponent } from "./markdownEditor/markdownEditor";
import { ToolbarComponent } from "./toolbar/toolbar";

export class EditorComponent extends React.Component {
  public render(): JSX.Element {
    return (
      <div>
        <ToolbarComponent />
        <div>
          <MarkdownEditorComponent />
          <HtmlEditorComponent />
        </div>
      </div>
    );
  }
}