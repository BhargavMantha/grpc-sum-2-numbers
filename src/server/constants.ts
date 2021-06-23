export const PROTO_OPTIONS = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
};

export interface IServiceDetails {
  path: string;
  packageName: string;
  service: string;
}

export const hostPath = '127.0.0.1:50051';
