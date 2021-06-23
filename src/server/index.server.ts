import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from '../proto/sum';
import { promisify } from 'util';
import { Service } from './get-service';
import { ServiceDetails } from './service-details.class';
import { hostPath, IServiceDetails } from './constants';
import { SumResponse } from 'src/proto/sumPackage/SumResponse';
import { SumRequest } from 'src/proto/sumPackage/SumRequest';

export class Initialize implements ProtoGrpcType {
  port: number = 50051;
  PROTO_FILE = '../proto/sum.proto';
  packageDef: protoLoader.PackageDefinition;
  grpcObj: ProtoGrpcType;
  sumPackage: ProtoGrpcType['sumPackage'];
  server: grpc.Server;
  serviceDetails: IServiceDetails;
  constructor() {
    this.serviceDetails = {
      path: this.PROTO_FILE,
      packageName: 'sumPackage',
      service: 'SumService'
    };
    this.getServer();
  }
  sum(
    call: grpc.ServerUnaryCall<SumRequest, SumResponse>,
    callback: grpc.sendUnaryData<SumResponse>
  ) {
    if (call.request) {
      console.log(`(server) Got client message: ${call.request.sum}`);
    }
    callback(null, {
      result: call.request.sum.value1 + call.request.sum.value2
    });
  }
  getServer() {
    const service = new Service();
    this.server = new grpc.Server();
    this.server.addService(service.getService(this.serviceDetails), {
      sum: this.sum
    });
  }

  main() {
    this.server.bindAsync(
      hostPath,
      grpc.ServerCredentials.createInsecure(),
      (err: Error | null, port: number) => {
        if (err) {
          console.error(`Server error: ${err.message}`);
        } else {
          console.log(`Server bound on port: ${port}`);
          this.server.start();
        }
      }
    );
  }
}
