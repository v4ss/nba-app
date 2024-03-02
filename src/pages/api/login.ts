// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if(req.method !== "POST") {
    res.status(405).json({error: "Méthode non autorisée"});
  }

  const {email, password} = JSON.parse(req.body);
  if(email !== "v4ss@gmail.com" && password !== "azerty") {
    res.status(401).json({error: "Identifiants invalide"});
  }
  res.status(200).json({ username: "v4ss" });
}
