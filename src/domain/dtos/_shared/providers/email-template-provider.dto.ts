export namespace EmailTemplateProviderDTO {
  type ITemplateVariables = {
    [key: string]: string | number;
  };

  export type Params = {
    file: string;
    variables: ITemplateVariables;
  };

  export type Result = {
    parseTemplate: string;
  };
}
