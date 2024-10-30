//ON DELETE CASCADE

CREATE TABLE
  truck (
    id int PRIMARY KEY,
    brand varchar(80),
    farmer_id int,
    FOREIGN KEY (farmer_id) REFERENCES farmer (id) ON DELETE CASCADE
  )
  
INSERT INTO
  truck ( id, brand, farmer_id)
VALUES
  (1, 'Cross', 1),
  (2, 'Super truck', 6),
  (3, 'Cat', 6),
  (4, 'Claas', 2);
 
DROP TABLE truck;
 
DELETE FROM farmer WHERE id=6;


//INDEX

CREATE INDEX farmer_id ON farmer(height);