
from django.shortcuts import render, HttpResponse
# Create your views here.
from django.shortcuts import get_object_or_404, render
from .models import Review
from .forms import ReviewForm
from django.shortcuts import redirect


def home(request):
    posts = Post.objects.all()
    reviews = Review.objects.all().order_by('-date')
    return render(request, 'index.html', {'posts': posts, 'reviews': reviews})
def submit_review(request):
    if request.method == 'POST':
        form = ReviewForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('home')
    else:
        form = ReviewForm()
    return render(request, 'submit_review.html', {'form': form})
def about(request):
    return render(request, 'about.html')
def form(request):
    return render(request, 'form.html')
def gallery(request):
    return render(request, 'gallery.html')
def chatbot(request):
    return render(request, 'chatbot.html')
def project(request):
    return render(request, 'Project - Copy.html')

from .models import Post


def post_detail(request, post_id):
    post = get_object_or_404(Post, pk=post_id)
    return render(request, 'post_detail.html', {'post': post})

def update_review(request, review_id):
    review = get_object_or_404(Review, pk=review_id)
    if request.method == 'POST':
        form = ReviewForm(request.POST, instance=review)
        if form.is_valid():
            form.save()
            return redirect('home')
    else:
        form = ReviewForm(instance=review)
    return render(request, 'update_review.html', {'form': form})

def delete_review(request, review_id):
    review = get_object_or_404(Review, pk=review_id)
    if request.method == 'POST':
        review.delete_review()
        return redirect('home')
    return render(request, 'delete_review.html', {'review':review})