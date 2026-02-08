-- Enable RLS
alter table "public"."users" enable row level security;
alter table "public"."accounts" enable row level security;
alter table "public"."plans" enable row level security;
alter table "public"."categories" enable row level security;
alter table "public"."sections" enable row level security;
alter table "public"."items" enable row level security;
alter table "public"."transactions" enable row level security;

-- Drop existing policies if they exist to avoid errors during re-migration
do $$
begin
    drop policy if exists "Users can see their own profile" on "public"."users";
    drop policy if exists "Users can update their own profile" on "public"."users";
    drop policy if exists "Users can manage their own accounts" on "public"."accounts";
    drop policy if exists "Users can manage their own plans" on "public"."plans";
    drop policy if exists "Users can manage their own categories" on "public"."categories";
    drop policy if exists "Users can manage their own sections" on "public"."sections";
    drop policy if exists "Users can manage their own items" on "public"."items";
    drop policy if exists "Users can manage their own transactions" on "public"."transactions";
exception
    when undefined_object then null;
end $$;

-- Users: Users can only see and update their own profile
create policy "Users can see their own profile"
on "public"."users"
for select
using (auth.uid() = id);

create policy "Users can update their own profile"
on "public"."users"
for update
using (auth.uid() = id);

-- Accounts: Users can perform all operations on their own accounts
create policy "Users can manage their own accounts"
on "public"."accounts"
for all
using (auth.uid() = "userId")
with check (auth.uid() = "userId");

-- Plans: Users can perform all operations on their own plans
create policy "Users can manage their own plans"
on "public"."plans"
for all
using (auth.uid() = "userId")
with check (auth.uid() = "userId");

-- Categories: Users can manage categories belonging to their plans
create policy "Users can manage their own categories"
on "public"."categories"
for all
using (
  exists (
    select 1 from "public"."plans"
    where "public"."plans"."id" = "public"."categories"."planId"
    and "public"."plans"."userId" = auth.uid()
  )
)
with check (
  exists (
    select 1 from "public"."plans"
    where "public"."plans"."id" = "public"."categories"."planId"
    and "public"."plans"."userId" = auth.uid()
  )
);

-- Sections: Users can manage sections belonging to their categories
create policy "Users can manage their own sections"
on "public"."sections"
for all
using (
  exists (
    select 1 from "public"."categories"
    join "public"."plans" on "public"."plans"."id" = "public"."categories"."planId"
    where "public"."categories"."id" = "public"."sections"."categoryId"
    and "public"."plans"."userId" = auth.uid()
  )
)
with check (
  exists (
    select 1 from "public"."categories"
    join "public"."plans" on "public"."plans"."id" = "public"."categories"."planId"
    where "public"."categories"."id" = "public"."sections"."categoryId"
    and "public"."plans"."userId" = auth.uid()
  )
);

-- Items: Users can manage items belonging to their categories
create policy "Users can manage their own items"
on "public"."items"
for all
using (
  exists (
    select 1 from "public"."categories"
    join "public"."plans" on "public"."plans"."id" = "public"."categories"."planId"
    where "public"."categories"."id" = "public"."items"."categoryId"
    and "public"."plans"."userId" = auth.uid()
  )
)
with check (
  exists (
    select 1 from "public"."categories"
    join "public"."plans" on "public"."plans"."id" = "public"."categories"."planId"
    where "public"."categories"."id" = "public"."items"."categoryId"
    and "public"."plans"."userId" = auth.uid()
  )
);

-- Transactions: Users can perform all operations on their own transactions
create policy "Users can manage their own transactions"
on "public"."transactions"
for all
using (auth.uid() = "userId")
with check (auth.uid() = "userId");