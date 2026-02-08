-- 1. Create the Function
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
as $function$
begin
  insert into public.users (id, email, "updatedAt")
  values (new.id, new.email, now());

  insert into public.plans ("userId", "updatedAt")
  values (new.id, now());

  return new;
end;
$function$;

-- 2. Create the Trigger
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
