import { PluginAPI } from "tailwindcss/types/config";

export type ResolverOptions<T> = {
  rootPath?: string;
  defaultConfig?: T;
};

export type Config = PluginAPI["config"];
