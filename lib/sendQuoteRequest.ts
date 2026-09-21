export type QuoteRequestPayload = {
  formType: "quote" | "project-selection" | "led-niche-promotion";
  fullname: string;
  email: string;
  phone: string;
  eircode?: string;
  project?: string;
};

export async function sendQuoteRequest(payload: QuoteRequestPayload) {
  const res = await fetch("/api/send-email", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    throw new Error(data.error || "Failed to send request.");
  }

  return data;
}
