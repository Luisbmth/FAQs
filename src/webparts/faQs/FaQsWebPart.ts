import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as React from 'react';
import * as ReactDom from 'react-dom';
import FaQs from './components/FaQs';
import { IFaQsProps } from './components/FaQs';

export interface IFaQsWebPartProps {
  description: string;
}

export default class FaQsWebPart extends BaseClientSideWebPart<IFaQsWebPartProps> {

  public render(): void {
    // Limpa conteúdo anterior
    this.domElement.innerHTML = '';

    // Container com largura total da coluna (não da tela)
    const container = document.createElement('div');
    container.style.width = '100%';         // ocupa toda a largura da coluna
    container.style.maxWidth = '100%';      // não ultrapassa o limite da coluna
    container.style.margin = '0 auto';      // centraliza caso a coluna seja maior
    container.style.padding = '0';          // remove padding extra
    container.style.boxSizing = 'border-box';

    this.domElement.appendChild(container);

    // Renderiza o componente React
    const element: React.ReactElement<IFaQsProps> = React.createElement(FaQs, {});
    ReactDom.render(element, container);
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
          header: { description: "Configurações do Web Part FaQs" },
          groups: [
            {
              groupName: "Opções",
              groupFields: [
                PropertyPaneTextField('description', { label: "Descrição (opcional)" })
              ]
            }
          ]
        }
      ]
    };
  }
}
