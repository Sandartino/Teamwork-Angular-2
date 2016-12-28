export class Kinvey {
    public static  baseUrl: string = 'https://baas.kinvey.com/';
    public static  appKey: string = 'kid_rylCvcWSl';
    public static  appSecret: string = '3f5d8d6eaa274b28b840cae52eef2ffa';

    public static appAuthHeaders() {
    return "Basic " + btoa(Kinvey.appKey + ":" + Kinvey.appSecret)
  }

  public static appAuthTokenHeaders() {
    console.log(sessionStorage.getItem("authToken"))
    return "Kinvey " + sessionStorage.getItem("authToken")
  }
}
