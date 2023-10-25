100x Data AnalysisFind the most frequently used word in the given dataset. 
The Setup1.
[] Request File endpoint: An **`HTTP GET`** endpoint, at this URL: `https://one00x-data-analysis.onrender.com/assignment`
1.When making the request, you need to send a URL parameter:1.`email` (your own email, so this can be tagged for you)2.This endpoint will give you 2 things:
- An assignment ID in the response headers. Note this down; you must use it when submitting the answer. Header name: `X-Assignment-ID`
- JSON encoded data as response. The format is shared below.
- The data has: 1.**100 data rows** with a **word or phrase** on each line 

The words are not unique, which means the same word or phrase can be repeated in different rows.

[]Submit Answer endpoint: `HTTP POST` your assignment ID and answer. If you submit a correct answer, you will get a secret code. Submit the assignment ID and secret through the form to get credits/points for this assignment
