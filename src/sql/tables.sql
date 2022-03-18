CREATE TABLE event (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid (),
  datum date DEFAULT NULL,
  title text DEFAULT NULL,
  links jsonb DEFAULT NULL,
  event_type text,
  tags jsonb DEFAULT NULL
);

CREATE INDEX ON event USING btree (id);

CREATE INDEX ON event USING btree (datum);

CREATE INDEX ON event USING btree (title);

-- was: commentary
CREATE TABLE article (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid (),
  datum date DEFAULT NULL,
  title text DEFAULT NULL,
  content bytea DEFAULT NULL, -- was: article
  draft boolean DEFAULT TRUE
);

-- ALTER TABLE article
--   ADD COLUMN draft boolean DEFAULT TRUE;
-- ALTER TABLE article
--   ALTER COLUMN draft SET DEFAULT FALSE;
CREATE INDEX ON article USING btree (id);

CREATE INDEX ON article USING btree (datum);

CREATE INDEX ON article USING btree (title);

CREATE TABLE monthly_event (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid (),
  datum date DEFAULT NULL,
  content bytea DEFAULT NULL -- was: article
);

CREATE INDEX ON monthly_event USING btree (id);

CREATE INDEX ON monthly_event USING btree (datum);

CREATE TABLE page (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid (),
  name text DEFAULT NULL,
  content bytea DEFAULT NULL -- was: article
);

CREATE INDEX ON page USING btree (id);

CREATE INDEX ON page USING btree (name);

CREATE TABLE publication (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid (),
  title text DEFAULT NULL,
  category text DEFAULT NULL,
  sort integer DEFAULT NULL, -- was: order
  cat_sort integer DEFAULT NULL, -- new to sort by 1. category 2. sort
  content bytea DEFAULT NULL -- was: article
  draft boolean DEFAULT TRUE
);

-- ALTER TABLE publication
--   ADD COLUMN draft boolean DEFAULT TRUE;
-- ALTER TABLE publication
--   ADD COLUMN cat_sort integer DEFAULT NULL;
-- CREATE INDEX ON publication USING btree (cat_sort);
-- UPDATE
--   publication
-- SET
--   cat_sort = 1
-- WHERE
--   category = 'European Union';
-- UPDATE
--   publication
-- SET
--   cat_sort = 2
-- WHERE
--   category = 'IOs & NGOs';
-- UPDATE
--   publication
-- SET
--   cat_sort = 3
-- WHERE
--   category = 'Academic';
CREATE INDEX ON publication USING btree (id);

CREATE INDEX ON publication USING btree (sort);

CREATE INDEX ON publication USING btree (cat_sort);

CREATE TABLE user_uids (
  uid text
);

CREATE INDEX ON user_uids USING btree (uid);

