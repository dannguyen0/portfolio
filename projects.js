/* ══════════════════════════════════════════════════════════════
   PROJECTS.JS  —  Edit this file to update your portfolio.

   To ADD a project:  copy one block ({ ... },) and paste it
   To REMOVE:         delete the whole block including the { }
   To REORDER:        cut a block and paste it where you want it
   Leave "link" as "" if you don't have a URL yet.
   Tags: keep them short — "Python", "SQL", "Tableau", etc.
   Icon options: movie | chart | food | store | music | scatter | globe | plane | bot
═══════════════════════════════════════════════════════════════ */

const PROJECTS = [
  {
    "title": "Hooked",
    "description": "Real-time fishing forecast tool that aggregates live NOAA tide data, wind/pressure/swell from Open-Meteo, and solar/lunar positioning to calculate a location-based bite score. Add custom fishing spots, track peak windows, and pull current California regulations — all in the browser.",
    "tags": ["JavaScript", "NOAA API", "Open-Meteo", "Forecast"],
    "icon": "hook",
    "link": "https://dannguyen0.github.io/hooked/"
  },
  {
    "title": "Claude Trading Bot",
    "description": "AI-powered options trading bot running three live strategies on AWS Lambda — credit spreads, TTM Squeeze momentum, and directional naked options. Claude Haiku acts as the scoring and decision engine, evaluating signals, news, and market regime before every trade. Full stack: DynamoDB, EventBridge, SNS alerts, API Gateway, and a live S3 dashboard.",
    "tags": ["Python", "Claude AI", "AWS", "Options"],
    "icon": "bot",
    "link": "https://dannguyen0.github.io/claude-trading-bot/"
  },
  {
    "title": "JobTrace",
    "description": "Multi-user job-application tracker. Users connect Gmail over OAuth; an hourly GitHub Actions worker reads application-lifecycle email, classifies each message with an LLM (applied / rejected / interview / assessment / offer), and pairs events by company into a live win-rate dashboard — interactive status breakdown, per-row JD-link editing, Discord scorecards. Serverless on Netlify functions with no database: one JSON file per user in a private repo. Demo runs on synthetic data.",
    "tags": ["JavaScript", "Python", "LLM", "OAuth", "Serverless"],
    "icon": "chart",
    "link": "jobtrace-demo/"
  },
  {
    "title": "Analysis on the Movie Industry",
    "description": "SQL and Python analysis of thousands of films to answer whether Hollywood has actually gotten better over time. Surfaces trends in genre dominance, the widening gap between critic and audience scores, and how production budgets map to box office returns.",
    "tags": ["Python", "SQL", "EDA", "Pandas"],
    "icon": "movie",
    "link": "https://github.com/dannguyen0/movie_industry_analysis/blob/main/movie_industry_analysis.ipynb"
  },
  {
    "title": "Movie Industry Tableau Reports",
    "description": "Tableau dashboard built to let anyone explore the movie dataset without touching the data — genre performance by decade, rating distributions, and revenue trends in an interactive format a non-technical stakeholder could navigate on their own.",
    "tags": ["Tableau", "Visualization"],
    "icon": "chart",
    "link": "https://public.tableau.com/views/MovieIndustry_16651259228630/Dashboard1?:language=en-US&:display_count=n&:origin=viz_share_link"
  },
  {
    "title": "Analysis on the Michelin Guide",
    "description": "SQL and Python analysis of Michelin-rated restaurants worldwide to uncover what separates one-star from three-star establishments. Examines how location, price point, and cuisine type correlate with recognition — with findings that challenge assumptions about what Michelin actually rewards.",
    "tags": ["Python", "SQL", "EDA"],
    "icon": "food",
    "link": "https://github.com/dannguyen0/michelin-guide/blob/main/Michelin%20Notebook.ipynb"
  },
  {
    "title": "Maven Market Power BI Dashboard",
    "description": "End-to-end Power BI dashboard for a multi-location grocery chain tracking revenue, margin, and product performance across regions. Built with executive KPI cards and drill-through filters so store managers can identify underperforming categories without needing an analyst.",
    "tags": ["Power BI", "Dashboard"],
    "icon": "store",
    "link": "https://docs.google.com/presentation/d/1Vh3TT9k7GkRY6yLJJiKFsRJ-Pn-XuNgD/edit?usp=sharing"
  },
  {
    "title": "Spotify Data Cleaning",
    "description": "Python pipeline to clean and standardize a large historical Spotify dataset — handling missing values, normalizing audio features, and structuring the data for analysis. The foundation for the Spotify popularity dashboard.",
    "tags": ["Python", "Data Cleaning"],
    "icon": "music",
    "link": "https://github.com/dannguyen0/spotify-data-cleaning/blob/main/Spotify%20Data%20Cleaning.ipynb"
  },
  {
    "title": "Spotify Data Dashboard",
    "description": "Power BI analysis of which audio features — energy, danceability, valence, tempo — correlate with streaming popularity. Built around one question: is there a formula to a hit song, and if so, what does it look like?",
    "tags": ["Power BI", "Visualization"],
    "icon": "music",
    "link": "https://docs.google.com/presentation/d/1125kiNvgdXsnwkcw0UDBRfVqdq2c3PBj/edit?usp=sharing"
  },
  {
    "title": "Movie Industry Part 2",
    "description": "Statistical follow-up to the EDA, running correlation tests to validate patterns spotted in exploration. Quantifies the relationships between budget, ratings, and revenue — separating signal from noise in a dataset where conventional wisdom often misleads.",
    "tags": ["Python", "SQL", "Statistics"],
    "icon": "scatter",
    "link": "https://github.com/dannguyen0/movie_industry_analysis/blob/main/Movie%20Data.ipynb"
  },
  {
    "title": "World Population Data Cleaning",
    "description": "SQL and Python cleaning of global population datasets, reconciling inconsistent country classifications and gaps across decades. Seaborn visualizations surface regional growth disparities and demographic shifts — structured for further modeling or policy analysis.",
    "tags": ["Python", "SQL", "Data Cleaning", "Seaborn"],
    "icon": "globe",
    "link": "https://github.com/dannguyen0/world_population"
  },
  {
    "title": "Airline Satisfaction Analysis",
    "description": "SQL and Python analysis of passenger survey data to identify which service factors most drive overall satisfaction scores. Findings isolate a short list of high-leverage touchpoints — the kind of insight an airline's ops or CX team could act on directly.",
    "tags": ["Python", "SQL", "EDA"],
    "icon": "plane",
    "link": "https://github.com/dannguyen0/airline_cleaning/blob/main/satisfaction_cleaning.ipynb"
  }
];
