/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { dataCacheBillingSettings } from "../funcs/dataCacheBillingSettings.js";
import { datacachePurgeall } from "../funcs/datacachePurgeall.js";
import { listDeploymentBuilds } from "../funcs/listDeploymentBuilds.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import {
  DataCacheBillingSettingsRequestBody,
  DataCacheBillingSettingsResponseBody,
} from "../models/operations/datacachebillingsettings.js";
import { DatacachePurgeallRequest } from "../models/operations/datacachepurgeall.js";
import {
  ListDeploymentBuildsRequest,
  ListDeploymentBuildsResponseBody,
} from "../models/operations/listdeploymentbuilds.js";
import { unwrapAsync } from "../types/fp.js";
import { AccessGroups } from "./accessgroups.js";
import { Aliases } from "./aliases.js";
import { Artifacts } from "./artifacts.js";
import { Authentication } from "./authentication.js";
import { Certs } from "./certs.js";
import { Checks } from "./checks.js";
import { Deployments } from "./deployments.js";
import { Dns } from "./dns.js";
import { Domains } from "./domains.js";
import { EdgeConfigs } from "./edgeconfigs.js";
import { Envs } from "./envs.js";
import { Events } from "./events.js";
import { Integrations } from "./integrations.js";
import { LogDrains } from "./logdrains.js";
import { ProjectDomains } from "./projectdomains.js";
import { ProjectMembers } from "./projectmembers.js";
import { Projects } from "./projects.js";
import { Promotions } from "./promotions.js";
import { ProtectionBypass } from "./protectionbypass.js";
import { Secrets } from "./secrets.js";
import { Teams } from "./teams.js";
import { Tokens } from "./tokens.js";
import { User } from "./user.js";
import { Webhooks } from "./webhooks.js";

export class Vercel extends ClientSDK {
  private _accessGroups?: AccessGroups;
  get accessGroups(): AccessGroups {
    return (this._accessGroups ??= new AccessGroups(this.options$));
  }

  private _artifacts?: Artifacts;
  get artifacts(): Artifacts {
    return (this._artifacts ??= new Artifacts(this.options$));
  }

  private _checks?: Checks;
  get checks(): Checks {
    return (this._checks ??= new Checks(this.options$));
  }

  private _projects?: Projects;
  get projects(): Projects {
    return (this._projects ??= new Projects(this.options$));
  }

  private _deployments?: Deployments;
  get deployments(): Deployments {
    return (this._deployments ??= new Deployments(this.options$));
  }

  private _domains?: Domains;
  get domains(): Domains {
    return (this._domains ??= new Domains(this.options$));
  }

  private _dns?: Dns;
  get dns(): Dns {
    return (this._dns ??= new Dns(this.options$));
  }

  private _edgeConfigs?: EdgeConfigs;
  get edgeConfigs(): EdgeConfigs {
    return (this._edgeConfigs ??= new EdgeConfigs(this.options$));
  }

  private _events?: Events;
  get events(): Events {
    return (this._events ??= new Events(this.options$));
  }

  private _integrations?: Integrations;
  get integrations(): Integrations {
    return (this._integrations ??= new Integrations(this.options$));
  }

  private _logDrains?: LogDrains;
  get logDrains(): LogDrains {
    return (this._logDrains ??= new LogDrains(this.options$));
  }

  private _projectMembers?: ProjectMembers;
  get projectMembers(): ProjectMembers {
    return (this._projectMembers ??= new ProjectMembers(this.options$));
  }

  private _projectDomains?: ProjectDomains;
  get projectDomains(): ProjectDomains {
    return (this._projectDomains ??= new ProjectDomains(this.options$));
  }

  private _envs?: Envs;
  get envs(): Envs {
    return (this._envs ??= new Envs(this.options$));
  }

  private _protectionBypass?: ProtectionBypass;
  get protectionBypass(): ProtectionBypass {
    return (this._protectionBypass ??= new ProtectionBypass(this.options$));
  }

  private _promotions?: Promotions;
  get promotions(): Promotions {
    return (this._promotions ??= new Promotions(this.options$));
  }

  private _teams?: Teams;
  get teams(): Teams {
    return (this._teams ??= new Teams(this.options$));
  }

  private _user?: User;
  get user(): User {
    return (this._user ??= new User(this.options$));
  }

  private _tokens?: Tokens;
  get tokens(): Tokens {
    return (this._tokens ??= new Tokens(this.options$));
  }

  private _webhooks?: Webhooks;
  get webhooks(): Webhooks {
    return (this._webhooks ??= new Webhooks(this.options$));
  }

  private _aliases?: Aliases;
  get aliases(): Aliases {
    return (this._aliases ??= new Aliases(this.options$));
  }

  private _certs?: Certs;
  get certs(): Certs {
    return (this._certs ??= new Certs(this.options$));
  }

  private _authentication?: Authentication;
  get authentication(): Authentication {
    return (this._authentication ??= new Authentication(this.options$));
  }

  private _secrets?: Secrets;
  get secrets(): Secrets {
    return (this._secrets ??= new Secrets(this.options$));
  }

  /**
   * Retrieves the list of builds given their deployment's unique identifier. No longer listed as public API as of May 2023.
   */
  async listDeploymentBuilds(
    request: ListDeploymentBuildsRequest,
    options?: RequestOptions,
  ): Promise<ListDeploymentBuildsResponseBody> {
    return unwrapAsync(listDeploymentBuilds(
      this,
      request,
      options,
    ));
  }

  async datacachePurgeall(
    request: DatacachePurgeallRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(datacachePurgeall(
      this,
      request,
      options,
    ));
  }

  async dataCacheBillingSettings(
    request?: DataCacheBillingSettingsRequestBody | undefined,
    options?: RequestOptions,
  ): Promise<DataCacheBillingSettingsResponseBody> {
    return unwrapAsync(dataCacheBillingSettings(
      this,
      request,
      options,
    ));
  }
}
