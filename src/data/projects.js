// =========================================================================
// PROJECTS DATA — add a new object to this array to publish a new project.
// Schema: id, title, description, tags, image (optional), liveUrl (optional),
// githubUrl, featured (optional bool — shown on the Home page preview).
// =========================================================================

const projects = [
  {
    id: "ml-predictive-modeling",
    title: "ML Predictive Modeling: Classification & Regression",
    description:
      "Compared multiple machine learning algorithms across two classic problems — breast cancer classification and diabetes progression regression — with full evaluation via confusion matrices, ROC curves, and residual plots.",
    tags: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Seaborn"],
    githubUrl: "https://github.com/ayush-cyber1/-Ml-predictive-modeling",
    featured: true,
  },
  {
    id: "churn-sentiment-app",
    title: "Customer Churn Prediction & Sentiment Analysis App",
    description:
      "An interactive Flask web app that predicts customer churn using Logistic Regression, Random Forest and Neural Network models, alongside an NLP pipeline that analyzes review sentiment in real time.",
    tags: ["Python", "Flask", "Scikit-learn", "PyTorch", "NLP"],
    githubUrl: "https://github.com/ayush-cyber1/churn_sentiment_app",
    featured: true,
  },
  {
    id: "movie-rating-prediction",
    title: "Movie Rating Prediction",
    description:
      "A regression model that predicts IMDb movie ratings from features like genre, director, and cast, using the IMDb Movies India dataset and a tuned Gradient Boosting model. Built during the CodSoft Data Science internship.",
    tags: ["Python", "Pandas", "Scikit-learn", "Gradient Boosting"],
    githubUrl: "https://github.com/ayush-cyber1/codsoft_tasks/tree/main/Movie%20Rating%20Prediction",
    featured: true,
  },
  {
    id: "sales-prediction",
    title: "Sales Prediction",
    description:
      "A sales forecasting model using Random Forest regression to predict product sales from advertising spend and other features, achieving an R² of 0.87. Built during the CodSoft Data Science internship.",
    tags: ["Python", "Pandas", "Scikit-learn", "Random Forest"],
    githubUrl: "https://github.com/ayush-cyber1/codsoft_tasks/tree/main/sales-prediction",
  },
  {
    id: "titanic-eda",
    title: "Titanic Survival — Exploratory Data Analysis",
    description:
      "An end-to-end EDA of the Titanic passenger dataset — statistical summaries, univariate/bivariate/multivariate visualizations, and feature engineering to uncover what drove survival, with sex and class emerging as the strongest predictors.",
    tags: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter Notebook"],
    githubUrl: "https://github.com/ayush-cyber1/Exploratory-Data-Analysis-EDA-Project",
  },
];

export default projects;
