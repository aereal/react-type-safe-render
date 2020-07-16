import { render } from 'react-dom';
import type { DOMElement, DOMAttributes, SFCElement, Component, ComponentState, CElement, ReactElement } from 'react';

type SafeContainer = Element | DocumentFragment;
type Callback = () => void;

interface SafeRenderer {
  <T extends Element>(element: DOMElement<DOMAttributes<T>, T>, container: SafeContainer, callback?: Callback): void;
  (element: Array<DOMElement<DOMAttributes<any>, any>>, container: SafeContainer, callback?: Callback): void;
  (element: SFCElement<any> | Array<SFCElement<any>>, container: SafeContainer, callback?: Callback): void;
  <P, T extends Component<P, ComponentState>>(
    element: CElement<P, T>,
    container: SafeContainer,
    callback?: Callback
  ): void;
  (element: Array<CElement<any, Component<any, ComponentState>>>, container: SafeContainer, callback?: Callback): void;
  <P>(element: ReactElement<P>, container: SafeContainer, callback?: Callback): void;
  (element: ReactElement[], container: SafeContainer, callback?: Callback): void;
}

/**
 * safeRender is actually same as render from react-dom but differs in that second argument is not nullable.
 */
export const safeRender: SafeRenderer = render;
