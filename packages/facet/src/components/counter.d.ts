import { ElementDefinitionContext, FoundationElement, FoundationElementDefinition } from "@microsoft/fast-foundation";
interface CounterDefinition extends FoundationElementDefinition {
    defaultButtonContent?: string;
}
export declare const counterTemplate: (context: ElementDefinitionContext, definition: CounterDefinition) => import("@microsoft/fast-element").ViewTemplate<any, any>;
export declare const counterStyles: (context: ElementDefinitionContext, definition: FoundationElementDefinition) => import("@microsoft/fast-element").ElementStyles;
export declare class Counter extends FoundationElement {
    appearance: string;
    count: number;
    increment(): void;
}
export declare const counter: (overrideDefinition?: import("@microsoft/fast-foundation").OverrideFoundationElementDefinition<CounterDefinition>) => import("@microsoft/fast-foundation").FoundationElementRegistry<CounterDefinition, import("@microsoft/fast-element").Constructable<FoundationElement>>;
export {};
//# sourceMappingURL=counter.d.ts.map