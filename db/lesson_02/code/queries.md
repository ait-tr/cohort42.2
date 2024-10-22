### Диаграммы с занятия
https://drawsql.app/teams/test-team-193/diagrams/lesson1-42-2
https://drawsql.app/teams/ait-tr-group-422/diagrams/vetpet

```sql
CREATE TABLE
  category (id serial PRIMARY KEY, category_name varchar(80))
```

```sql
CREATE TABLE
  product (
    id serial PRIMARY KEY,
    product_name varchar(80),
    price decimal(8, 2),
    brand varchar(80),
    category_id integer REFERENCES category (id)
  )
```

```sql
INSERT INTO
  category (category_name)
VALUES
  ('electronics'),
  ('food'),
  ('clothes');
```

```sql
INSERT INTO
  product (product_name, price, brand, category_id)
VALUES
  ('milk', 5, 'milkland', 2),
  ('salami', 10, 'meat world', 2),
  ('iphoneX', 1000, 'apple', 1),
  ('jeans', 100, 'h&m', 3),
  ('galaxy', 800, 'samsung', 1);
```

```sql
SELECT
  *
FROM
  product
  JOIN category ON category.id = product.category_id
```

```sql
SELECT
  category.category_name,
  product.product_name,
  product.price,
  product.brand
FROM
  product
  JOIN category ON category.id = product.category_id
```
