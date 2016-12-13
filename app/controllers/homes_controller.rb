class HomesController < ApplicationController

  before_action :basic, only: :hinano

  def index
  end

  def show
  end

  def graphics
  end

  def books
  end

  def hinano
  end

  def basic
    authenticate_or_request_with_http_basic do |user, pass|
      user == 'hinano' && pass == '20161215'
    end
  end
  
end
