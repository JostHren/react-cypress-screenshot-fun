/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { inspect } from 'util';

import { ReactElement } from 'react';

export const MockComponent = ({ children, componentName, testId, ...props }: any): ReactElement => (
  <div data-component-name={componentName} data-testid={testId} onClick={props?.onClick}>
    --- PROPS
    {inspect(props)}
    --- CHILDREN
    {children}
  </div>
);

export const mockComponent = (
  componentName: string,
  testId?: string,
): Record<string, (props: any) => ReactElement> => ({
  [componentName]: (props: any) => (
    <MockComponent componentName={componentName} testId={testId} {...props} />
  ),
});
