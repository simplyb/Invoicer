Factory.sequence :email do |n|
  "user#{n}@example.com"
end

Factory.define :user, :class => 'User' do |user|
  user.email { Factory.next :email }
  user.password "example"
end

