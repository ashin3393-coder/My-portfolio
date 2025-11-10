import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  app.get("/api/download-resume", (req, res) => {
    const resumePath = path.join(process.cwd(), "attached_assets", "ASHIN TOM SEBASTIAN  Resume                                                                                                                      Email_1762786987598.pdf");
    res.download(resumePath, "Ashin_Tom_Sebastian_Resume.pdf", (err) => {
      if (err) {
        console.error("Error downloading resume:", err);
        res.status(500).send("Error downloading resume");
      }
    });
  });

  const httpServer = createServer(app);

  return httpServer;
}
