## Minor Project - Text Summarization API

This repository contains a simple API to summarize text using the `Summarizer` class and the HuggingFace `facebook/bart-large-cnn` model. The API is built using FastAPI and provides endpoints to summarize text and get additional information about the summarization process.

### Requirements

To run the project, you need the following installed:

- Python 3.8.13 or later
- Node.js version 16.18.0 or later (for the frontend)
- npm (Node.js package manager)

### How to Run the Project

#### Backend:

1. Clone the repository and navigate to the project directory.

2. Install the Python dependencies specified in `requirements.txt`:

   ```bash
   pip install -r requirements.txt
   ```

3. Start the FastAPI server:

   ```bash
   uvicorn app:app --reload
   ```

   The server will run on `http://localhost:8000`.

#### Frontend:

1. Navigate to the `UI` directory inside the project.

2. Install the required Node.js packages:

   ```bash
   npm install
   ```

3. Start the frontend server:

   ```bash
   node server.js
   ```

   The frontend server will run on `http://localhost:3000`.

4. Open `index.html` or access the website using a live server to interact with the API.

#### Endpoints

The backend API provides the following endpoints:

1. **GET `/`**: Returns a welcome message.

2. **POST `/summarize`**: Accepts a JSON payload with a `text` field containing the input text to summarize. It returns a JSON response containing the summary and other information such as the original text length and summary length.

3. **POST `/summarize_all`**: Similar to the `/summarize` endpoint, but it also returns the percentage reduction in text length and the time taken to summarize the text.

### Summarizer Class

The `Summarizer` class, defined in the `summarize.py` script, is responsible for using the HuggingFace model to perform the text summarization. The class provides two methods:

1. `get_summary(text)`: This method takes the input `text`, summarizes it using the `facebook/bart-large-cnn` model, and returns a dictionary with the original text, summary, length before summarization, length after summarization, percentage reduction, and time taken.

2. `get_all()`: This method is similar to `get_summary()` but returns the original text, summary, and percentage reduction.

### Docker Support

The repository also provides a `Dockerfile` to build a Docker image of the project. To build and run the Docker container, follow these steps:

1. Build the Docker image:

   ```bash
   docker build -t minor_project .
   ```

2. Run the Docker container:

   ```bash
   docker run -p 8000:8000 minor_project
   ```

   The API will be accessible on `http://localhost:8000`.

### Example Usage

An example of how to use the API:

```python
import requests

# Assuming the server is running locally at http://localhost:8000

# Home endpoint
response = requests.get("http://localhost:8000/")
print(response.text)  # Output: Welcome to the home page

# Summarize endpoint
text_to_summarize = "The two armies had gathered on the battlefield of Kurukshetra, well prepared to fight a war that was inevitable. ..."
response = requests.post("http://localhost:8000/summarize", json={"text": text_to_summarize})
print(response.json())

# Summarize All endpoint
response = requests.post("http://localhost:8000/summarize_all", json={"text": text_to_summarize})
print(response.json())
```

### Conclusion

This project demonstrates a simple API for text summarization using the HuggingFace `facebook/bart-large-cnn` model. It provides a convenient way to summarize text and obtain useful information about the summarization process. The frontend allows users to interact with the API and get summaries of their input text. Feel free to explore and experiment with the code to understand and enhance its functionality further.
