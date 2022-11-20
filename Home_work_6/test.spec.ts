import superagent from "superagent";

describe("API_1 GET", () => {
  it("Status", async () => {
    const res = await superagent.get("https://reqres.in/api/users?page=2");
    expect(res.status).toBe(200);
  });
});

describe("API_2 HEAD", () => {
  it("Body", async () => {
    const res = await superagent.head("https://reqres.in/api/users?page=2");
    expect(res.body).toEqual({});
  });
});

describe("API_3 GET_DEEP_DATA", () => {
  it("first_name", async () => {
    const res = await superagent.get("https://reqres.in/api/users?page=2");
    expect(res.body.data[0].first_name).toBe("Michael");
  });
});

describe("API_4 GET_ERROR", () => {
  it("Error", async () => {
    try {
      await superagent.get("https://reqres.in/api/users/99");
    } catch (error: any) {
      expect(error.status).toBe(404);
      expect(error.body).toEqual(undefined);
    }
  });
});

describe("API_5 POST", () => {
  it("test", async () => {
    const myObj: { name: string; job: string } = {
      name: "Andrew",
      job: "AQA",
    };
    const res = await superagent
      .post("https://reqres.in/api/users")
      .set("Content-Type", "application/json")
      .send({ name: myObj["name"], job: myObj["job"] });
    expect(res.status).toBe(201);
    expect(res.body.name).toEqual(myObj.name);
    expect(res.body.job).toEqual(myObj.job);
    expect(Number(res.body.id)).toBeLessThan(1000);
  });
});

describe("API_6 PUT", () => {
  it("test", async () => {
    const myObj: { name: string; job: string } = {
      name: "Andrew",
      job: "AQA",
    };
    const res = await superagent
      .put("https://reqres.in/api/users/3")
      .set("Content-Type", "application/json")
      .send({ name: myObj["name"], job: myObj["job"] });
    expect(res.status).toBe(200);
    expect(res.body.name).toEqual(myObj.name);
    expect(res.body.job).toEqual(myObj.job);
  });
});

describe("API_7 PATCH", () => {
  it("test", async () => {
    const myObj: { name: string; job: string } = {
      name: "Andrew",
      job: "AQA",
    };
    const res = await superagent
      .patch("https://reqres.in/api/users/4")
      .set("Content-Type", "application/json")
      .send({ name: myObj["name"], job: myObj["job"] });
    expect(res.status).toBe(200);
    expect(res.body.name).toEqual(myObj.name);
    expect(res.body.job).toEqual(myObj.job);
  });
});

describe("API_8 DELETE", () => {
  it("Error", async () => {
    try {
      await superagent.delete("https://reqres.in/api/users/5");
    } catch (error: any) {
      expect(error.status).toBe(204);
      expect(error.body).toEqual(undefined);
    }
  });
});

describe("API_9 POST REGISTER_SUCCESSFUL", () => {
  it("test", async () => {
    const myObj: { email: string; password: string } = {
      email: "eve.holt@reqres.in",
      password: "pistol",
    };
    const res = await superagent
      .post("https://reqres.in/api/register")
      .set("Content-Type", "application/json")
      .send({ email: myObj["email"], password: myObj["password"] });
    expect(res.status).toBe(200);
    expect(res.body.id).toEqual(4);
    expect(res.body.token).toEqual("QpwL5tke4Pnpja7X4");
  });
});

describe("API_10 POST REGISTER_UNSUCCESSFUL", () => {
  it("test", async () => {
    const myObj: { email: string } = {
      email: "sydney@fife",
    };
    try {
      await superagent
        .post("https://reqres.in/api/register")
        .set("Content-Type", "application/json")
        .send({ email: myObj["email"] });
    } catch (error: any) {
      expect(error.status).toBe(400);
      expect(error.response.body.error).toEqual("Missing password");
    }
  });
});
