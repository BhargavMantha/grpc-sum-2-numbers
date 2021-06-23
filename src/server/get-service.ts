import path from 'path';
import { loadPackageDefinition } from '@grpc/grpc-js';
import { loadSync } from '@grpc/proto-loader';
import {
  ServiceClientConstructor,
  GrpcObject,
  ServiceDefinition
} from '@grpc/grpc-js/build/src/make-client';
import { IServiceDetails, PROTO_OPTIONS } from './constants';

export class Service {
  getService = (proto: IServiceDetails): ServiceDefinition => {
    const PROTO_PATH = path.resolve(__dirname, proto.path);
    const packageDefinition = loadSync(PROTO_PATH, PROTO_OPTIONS);
    const grpcObj: GrpcObject = loadPackageDefinition(packageDefinition);
    const services = grpcObj[proto.packageName] as GrpcObject;
    const constructor = services[proto.service] as ServiceClientConstructor;
    const { service } = constructor;
    return service;
  };
}
