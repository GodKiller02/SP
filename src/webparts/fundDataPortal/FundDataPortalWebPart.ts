import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, IPropertyPaneConfiguration, PropertyPaneTextField } from '@microsoft/sp-webpart-base';

import FundDataPortal from './components/FundDataPortal';
import { IFundDataPortalProps } from './components/IFundDataPortalProps';

export interface IFundDataPortalWebPartProps {
  title: string;
}

export default class FundDataPortalWebPart extends BaseClientSideWebPart<IFundDataPortalWebPartProps> {
  public render(): void {
    const element: React.ReactElement<IFundDataPortalProps> = React.createElement(FundDataPortal, {
      title: this.properties.title,
      context: this.context
    });

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: 'Fund data portal settings'
          },
          groups: [
            {
              groupName: 'General',
              groupFields: [
                PropertyPaneTextField('title', {
                  label: 'Title'
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
