export type TStatus = {
  code: number;
  error: any;
};

export type TUserData = {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
};

export type TProjectItem = {
  projectId: string;
  userIds: string[];
  rule: string;
  gatewayIds: string[];
  structure: string;
  industry: string;
  website: string;
  description: string;
  image: string;
  name: string;
};

export type TGatewayItem = {
  gatewayId: string;
  userIds: string[];
  name: string;
  type: string;
  apiKey: string;
  secondaryApiKey: string;
  description: string;
};

export type TReportsItem = {
  paymentId: string;
  amount: number;
  projectId: string;
  gatewayId: string;
  userIds: string[];
  modified: string;
  created: string;
};

export type TBodyGenerateReports = {
  from: string,
  to: string,
  projectId?: string
  gatewayId?: string
}
