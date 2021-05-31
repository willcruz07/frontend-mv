import { createServer } from "miragejs";

createServer({
  routes() {
    this.namespace = "api";

    this.get("/quantityTeams", () => ({
      quantity: "2",
    }));

    // this.post("/start", (schema, request) => {
    //   const attrs = JSON.parse(request.requestBody);
    //   console.log(attrs);
    // });
  },
});
