const APP_ENV: string = process.env.NEXT_PUBLIC_APP_ENVIRONMENT || "local";
let APP_HOST: string;

switch (APP_ENV) {
  case "local":
    APP_HOST = process.env.NEXT_PUBLIC_API_HOST_LOCAL || "default_local_host";
    break;
  case "dev":
    APP_HOST = process.env.NEXT_PUBLIC_API_HOST_DEV || "default_dev_host";
    break;
  case "prod":
    APP_HOST = process.env.NEXT_PUBLIC_API_HOST_PROD || "default_prod_host";
    break;
  default:
    APP_HOST = process.env.NEXT_PUBLIC_API_HOST_DEFAULT || "default_host";
    break;
}

console.log("APP_ENV:", APP_ENV);
console.log("APP_HOST:", APP_HOST);

export default APP_HOST;
