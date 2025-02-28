from pyspark.sql import SparkSession

# Initialize Spark Session
spark = SparkSession.builder.appName("BigQueryRead").getOrCreate()


# Read data from BigQuery
df = spark.read.format("csv").option("header", "true").load("gs://learning-bucket-8610/annual-enterprise-survey-2023-financial-year-provisional.csv")

# Show Data (Limit 5 rows)
df.show(5)

# Perform a simple transformation (e.g., count rows)
row_count = df.count()
print(f"Total Rows: {row_count}")

# Stop Spark Session
spark.stop()
