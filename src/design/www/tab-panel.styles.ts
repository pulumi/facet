import { css } from "@microsoft/fast-element";
import { ElementDefinitionContext, FoundationElementDefinition } from "@microsoft/fast-foundation";
import { tabPanelStyles } from "@microsoft/fast-components";
import { margin } from "../base";

export const wwwTabPanelStyles = (context: ElementDefinitionContext, definition: FoundationElementDefinition) => css`
    ${tabPanelStyles(context, definition)}

    :host {
        padding: 0;
        margin: 0;
    }
`;
