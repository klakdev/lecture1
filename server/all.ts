x

// app.all("*", async function authenticate(req, res, next) {
//   const token = req.headers.token;
//   const id = await db.user.validate(token);
//   if(!id) {
//     res.status(401).json({code: "Not Authorized"})
//   }
//   req.id = id;
//   next();
// })

// app.all("*", async function authenticate(req, res, next) {
//   const valid = await db.user.search(req.id);
//   if(!valid) {
//     res.status(401).json({code: "Not Authorized"})
//   }
//   next();
// })
