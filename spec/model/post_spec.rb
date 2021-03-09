require 'rails_helper'

RSpec.describe Post, :type => :model do
  subject {
    described_class.new(title: "Something",
                        body: "Lorem ipsum",
                       )
  }
 
  it "is not valid without a title" do
    subject.title = nil
    expect(subject).to_not be_valid
  end

  it "is not valid without a description" do
    subject.body = nil
    expect(subject).to_not be_valid
  end

  describe "Associations" do
    it { should belong_to(:category).without_validating_presence }
  end

  

end