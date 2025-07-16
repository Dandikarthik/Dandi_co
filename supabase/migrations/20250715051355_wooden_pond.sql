/*
  # Create visitors table for signup popup

  1. New Tables
    - `visitors`
      - `id` (uuid, primary key)
      - `email` (text, unique, required)
      - `name` (text, required)
      - `company` (text, optional)
      - `phone` (text, optional)
      - `interest` (text, optional)
      - `message` (text, optional)
      - `source` (text, default 'website')
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `visitors` table
    - Add policy for public insert (visitors can sign up)
    - Add policy for authenticated users to read data
*/

CREATE TABLE IF NOT EXISTS visitors (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  name text NOT NULL,
  company text,
  phone text,
  interest text,
  message text,
  source text DEFAULT 'website',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE visitors ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (sign up)
CREATE POLICY "Anyone can sign up"
  ON visitors
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated users to read all visitor data
CREATE POLICY "Authenticated users can read visitor data"
  ON visitors
  FOR SELECT
  TO authenticated
  USING (true);

-- Create index for email lookups
CREATE INDEX IF NOT EXISTS visitors_email_idx ON visitors(email);

-- Create index for created_at for sorting
CREATE INDEX IF NOT EXISTS visitors_created_at_idx ON visitors(created_at DESC);