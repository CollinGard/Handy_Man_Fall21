# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


5.times do
  @worker = Worker.create(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name ,
    phone_number: Faker::PhoneNumber.cell_phone,
  )

  5.times do
   @service = Service.create(
      job_type: Faker::Job.field,
      cost: Faker::Number.decimal(l_digits: 2),
      date: Faker::Date.between(from: 30.days.ago,to: Date.today),
      worker_id: @worker.id
    )

    5.times do
      Comment.create(
        topic: Faker::Science.element_state,
        description: Faker::Company.bs,
        address: Faker::Address.street_address,
        service_id: @service.id
      )
    end
  end 
end 

puts "Data Seeded"
@workers = Worker.all
@services = Service.all
@comments = Comment.all
p @workers
p @services
p @comments
