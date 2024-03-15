# Generated by Django 4.2.7 on 2023-11-30 04:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0003_category_status'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='description',
            field=models.TextField(default='Generic Description', max_length=150),
        ),
        migrations.AddField(
            model_name='product',
            name='image',
            field=models.ImageField(default='default-image.jpg', upload_to='images/'),
        ),
        migrations.AddField(
            model_name='product',
            name='price',
            field=models.DecimalField(decimal_places=2, default=100, max_digits=7),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='product',
            name='stock',
            field=models.PositiveSmallIntegerField(default=1),
        ),
    ]