create TABLE service(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    description VARCHAR(1023),
    price_less_80m NUMERIC,
    price_more_80m NUMERIC
);