export class Kinvey {
    public static  baseUrl: string = 'https://baas.kinvey.com/';
    public static  appKey: string = 'kid_H1tVQj04e';
    public static  appSecret: string = 'add9c46a97a84508a46221334f8d224a';

    public static appAuthHeaders() {
    return "Basic " + btoa(Kinvey.appKey + ":" + Kinvey.appSecret)
  }

  public static appAuthTokenHeaders() {
    console.log(sessionStorage.getItem("authToken"))
    return "Kinvey " + sessionStorage.getItem("authToken")
  }
}
