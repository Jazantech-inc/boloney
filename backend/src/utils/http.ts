export const httpRequest = (nk: nkruntime.Nakama, url: string, method: nkruntime.RequestMethod, body: unknown): nkruntime.HttpResponse => {
  return nk.httpRequest(url, method, { "Content-Type": "application/json" }, JSON.stringify(body), 600000);
};
