require 'test_helper'

class Api::PostsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_posts_index_url
    assert_response :success
  end

end
