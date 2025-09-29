# 📊 Kendo Price Dashboard  

A React-based price tracking dashboard built with **10 KendoReact components**.  
It monitors product prices, visualizes trends, and integrates **Nuclia’s RAG (Retriever-Augmented Generation)** to provide **AI-powered insights**.  

---

## ✨ Features  
- Real-time price tracking  
- Interactive KendoReact charts, grids, and inputs  
- Screenshot previews of the dashboard  
- **Nuclia RAG integration** for natural language queries  
- Ready for deployment and continuous monitoring  

---

## 🏆 RAGs to Riches: Nuclia Integration  

The **Kendo Price Dashboard** integrates **Nuclia’s RAG** to allow **natural language queries** on price data.  

**How it works:**  
1. Price data is ingested into **Nuclia’s vector store**.  
2. When users ask a question (e.g., *“Which product dropped most in price this week?”*), Nuclia retrieves relevant records.  
3. The **RAG pipeline** combines these results with an LLM to generate a contextual answer.  
4. The dashboard displays the response alongside charts.  

**Example queries:**  
- *“Summarize price changes under $200.”*  
- *“Which product had the biggest fluctuation?”*  

**Impact:**  
Nuclia transforms the dashboard from static visualization into an **AI-powered assistant**, delivering **context-aware insights** for analysts, shoppers, and businesses.  

---

## 📸 Screenshots  

[Dashboard Screenshot](IMG_20250928_001447_184.jpg)

---

## 🚀 Getting Started  

```bash
# Clone the repo
git clone https://github.com/oboh12/kendo-price-dashboard.git
cd kendo-price-dashboard

# Install dependencies
npm install

# Run the app
npm start
