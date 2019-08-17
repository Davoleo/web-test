# Functions
# Exceptions Handling
# Strings


def add_nums(num_1, num_2)
    return num_1.to_i + num_2.to_i
end
puts add_nums(3, 4)

# this demonstrates that: YOU CAN'T CHANGE PARAMETER'S VALUES
x=1
def change_x(x)
    x = 4
end

change_x(x)
puts "x = #{x}" 

puts "--------------------------"
print "Enter a number : "
first_num = gets.to_i
print "Enter another number : "
second_num = gets.to_i

# Begin works like a try block
# Rescue works like a catch block
begin
    answer = first_num / second_num
rescue
    puts "You can't divide by 0"
    exit
end

puts "#{first_num} / #{second_num} = #{answer}"

#Throw custom exceptions
def check_age(age)
    raise ArgumentError, "Enter Positive Number" unless age > 0
end

begin 
    check_age(-1)
rescue ArgumentError
    puts "That is an impossible age"
end
puts "--------------------------"

#Interpolation and escape sequences function only if you use double quotes
puts "Add Them #{4 + 5} \n\n"
puts 'Add Them #{4 + 5} \n\n'


multiline_string = <<EOM
This is a very long string
that contains interpolation
like #{2 + 3} \n\n
EOM

puts multiline_string
puts "--------------------------"

name = "Davoleo"
#Returns if the string contains the string in the parameter
puts name.include?("avo")
#Returns the number of chars in the string
puts name.size
#Counts specific chars
puts "Vowels : " + name.count("aeiou").to_s
puts "Consonants : " + name.count("^aeiou").to_s
#Checks if the string starts with a specific char sequence
puts name.start_with?("L")
#Returns the index of the char sequence in the argument
puts "Index : " + name.index("leo").to_s
#Change String case style
puts name.upcase
puts name.downcase
puts name.swapcase
#Strip off all the white spaces from strings
name = "        " + name
name = name.lstrip #rstrip does this on the right | strip does it everywhere
#Justify String utility
puts name.rjust(20, ".")
puts name.ljust(20, ".")
puts name.center(20, ".")

#Truncates the string
puts name.chop #of one char
puts name.chomp("leo") #of whatever chars you choose as argument
#Deletes all the occurrences of a specific char
puts name.delete("e")
puts "--------------------------"

#Splits a string into an array
name_array = name.split(//)
puts name_array

name_array = name.split(/l/)
puts name_array

#String conversion:
# to integer: to_i
# to float: to_f
# to a symbol: to_sym

=begin
Escape Sequences:
\\ -> Backslash
\' -> Single-quote
\" -> Double-quote
\a -> Bell
\b -> Backspace
\f -> Formfeed
\n -> Newline
\r -> Carriage
\t -> Tab
\v -> Vertical Tab
end



