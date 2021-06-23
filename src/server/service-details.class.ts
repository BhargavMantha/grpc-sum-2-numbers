import { IServiceDetails } from './constants';

export class ServiceDetails implements IServiceDetails {
  path: string;
  packageName: string;
  service: string;

  constructor({ path, packageName, service }) {
    this.path = path;
    this.packageName = packageName;
    this.service = service;
  }
  getServiceDetails() {
    return {
      path: this.path,
      packageName: this.packageName,
      service: this.service
    };
  }
}
